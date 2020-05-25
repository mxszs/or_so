import React, { useState, useEffect } from 'react';
import { Upload, message, Button } from 'antd';
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
} from 'antd/lib/upload/interface';

// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }
const preStyle: React.CSSProperties = {
  whiteSpace: 'pre-wrap',
  height: 400,
};

const Avatar = () => {
  const [files, setFiles] = useState<RcFile[]>([]);
  const [fileList, setFilesList] = useState<string[]>([]);

  const beforeUpload = (file: RcFile) => {
    console.log(file, 'file');
    const newFiles = [...files];
    const isJpgOr =
      file.type === 'application/json' || file.type === 'text/plain';
    if (!isJpgOr) {
      message.error('文件不符合规则');
      return false;
    }
    newFiles.push(file);
    setFiles(newFiles);
    return false;
  };
  const handleChange = ({ file }: UploadChangeParam<UploadFile<any>>) => {
    const { status } = file;
    // 移除文件
    if (status === 'removed') {
      const index = files.indexOf(file as RcFile);
      const newFileList = files.slice();
      newFileList.splice(index, 1);
      setFiles(newFileList);
    }
  };

  const loadFile = (data: RcFile[]) => {
    const promiseAll = [];
    const reader: FileReader[] = [];
    for (let i = 0; i < data.length; i += 1) {
      promiseAll[i] = new Promise(resolve => {
        reader[i] = new FileReader();
        reader[i].readAsText(data[i]);
        reader[i].onload = () => {
          resolve(reader[i].result);
        };
      });
    }
    Promise.all(promiseAll)
      .then(
        readers => {
          setFilesList(readers as string[]);
          setFiles([]);
        },
        e => {
          console.log(111);
        },
      )
      .catch(e => {
        console.log(222);
      });
  };

  const submit = () => {
    loadFile(files);
  };

  const download = (context: string, fileName: string) => {
    console.log(context, 'context');
    // 将字符串转成文件
    // 获取字符内容，转为blob地址
    const blob = new Blob([context]);
    // // blob地址转为URL
    const eleLink = document.createElement('a');
    // const reader = new FileReader();
    // reader.readAsDataURL(blob)
    // reader.onload = () => {
    eleLink.href = URL.createObjectURL(blob);
    //   eleLink.href = reader.result as string;
    eleLink.style.display = 'none';
    eleLink.download = fileName;
    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
    // }
  };

  const downloadFile = () => {
    fileList.forEach(item => download(item, `${new Date().getTime()}.json`));
  };

  return (
    <div>
      <Upload
        beforeUpload={beforeUpload}
        fileList={files}
        onChange={handleChange}
      >
        <Button>选择文件</Button>
      </Upload>
      <Button onClick={submit}>提交</Button>
      <Button style={{ margin: 8 }} onClick={downloadFile}>
        下载
      </Button>
      {fileList.map(item => (
        <pre style={preStyle}>{item}</pre>
      ))}
    </div>
  );
};

export default Avatar;
