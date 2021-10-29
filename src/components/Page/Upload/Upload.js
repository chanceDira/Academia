import './Upload.css';
import React, { useRef, useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [passport, setPassport] = useState(''); // storing the uploaded file
    const [file, setFile] = useState(''); // storing the uploaded file
    const [highCert, setHighCert] = useState(''); // storing the uploaded Highschool file
    const [bacDegree, setBacDegree] = useState(''); // storing the uploaded Bachelors degree file
    const [transcript, setTranscript] = useState(''); // storing the uploaded Transcript file
    const [CV, setCV] = useState(''); // storing the uploaded CV file
    const [OtherLang, setOtherLang] = useState(''); // storing the uploaded CV file
    
    // storing the recived files from backend
    const [passportData, getPassport] = useState({ name: "", path: "" });
    const [data, getFile] = useState({ name: "", path: "" });
    const [highCertData, getHighCertFile] = useState({ name: "", path: "" });
    const [bacDegreeData, getBacDegreeFile] = useState({ name: "", path: "" });
    const [transcriptData, getTranscriptFile] = useState({ name: "", path: "" });
    const [CVData, getCVFile] = useState({ name: "", path: "" });
    const [OtherLangData, getOtherLangFile] = useState({ name: "", path: "" });

    const [progressPassport, setProgessPassport] = useState(0);
    const [progress, setProgess] = useState(0);
    const [progressHighCert, setProgessHighCert] = useState(0); // progess bar
    const [progressBacDegree, setProgessBacDegree] = useState(0); // progess bar
    const [progressTranscript, setProgessTranscript] = useState(0); // progess bar
    const [progressCV, setProgessCV] = useState(0); // progess bar
    const [progressOtherLang, setProgessOtherLang] = useState(0); // progess bar
    const el = useRef(); // accesing input element

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
    }
    const handleChangeHighCert = (e) => {
      setProgessHighCert(0)
      const highCert = e.target.files[0]; // accessing file
      console.log(highCert);
      setHighCert(highCert); // storing file
    }
    const handleChangeBacDegree = (e) => {
      setProgessBacDegree(0)
      const bacDegree = e.target.files[0]; // accessing file
      console.log(bacDegree);
      setBacDegree(bacDegree); // storing file
    }

    const handleChangeTranscript = (e) => {
          setProgessTranscript(0)
          const transcript = e.target.files[0]; // accessing file
          console.log(transcript);
          setBacDegree(transcript); // storing file
        }

    const handleChangeCV = (e) => {
      setProgessBacDegree(0)
      const cv = e.target.files[0]; // accessing file
      console.log(cv);
      setBacDegree(cv); // storing file
    }
    const handleChangeOtherLang = (e) => {
      setProgessOtherLang(0)
      const otherLang= e.target.files[0]; // accessing file
      console.log(otherLang);
      setOtherLang(otherLang); // storing file
    }
    
    const uploadFiles = () => {
        const formData = new FormData();
        formData.append('file', file); // appending file
        axios.post('http://localhost:5000/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
                setProgessHighCert(progress);
                setProgessBacDegree(progress)
                console.log(progress )
            }
        }).then(res => {
            console.log(res.data.name);
            getFile({ name: res.data.name,
                     path: 'http://localhost:5000/public/' + res.data.path
                   })
        }).catch(err => console.log(err))}
   
    return (
        <div>
            <div className="file-upload">
                <b style ={{textAlign:'left'}}> Passport/ID</b>
                <input type= "file" onChange={handleChangeHighCert} />
                <div className="progessBar" style={{ width: progressHighCert}}>
                {progressHighCert}    
                </div>
                <br />
                <hr />

                <b style ={{textAlign:'left'}}> High school certificate</b>
                <input type= "file" onChange={handleChangeHighCert} />
                <div className="progessBar" style={{ width: progressHighCert}}>
                {progressHighCert}
                   
                </div>
            
                <br />
                <hr />
                <b style ={{textAlign:'left'}}> Bachelor Degree</b>
                <input type= "file" onChange={handleChangeBacDegree} />
                <div className="progessBar" style={{ width: progressBacDegree}}>
                {progressBacDegree}
                   
                </div>
                <br />
                <hr />

                <b style ={{textAlign:'left'}}> Transcript</b>
                <input type= "file" onChange={handleChangeTranscript}/>
                <div className="progessBar" style={{ width: progressTranscript}}>
                {progressTranscript}         
                </div>
                <br />
                <hr />

                <b style ={{textAlign:'left'}}>Attach CV</b>
                <input type= "file" onChange={handleChangeCV}/>
                <div className="progessBar" style={{ width: progressCV}}>
                {progressCV}
                   
                </div>
               
                <br />
                <hr />

                <b style ={{textAlign:'left'}}>Other Language Certificate</b>
                <input type= "file" name="Diploma/Degree" style ={{width:'100%'}}/>
                <div className="progessBar" style={{ width: progressCV}}>
                {progressCV}
                   
                </div>
              
                <br />
                <hr />
                <b style ={{textAlign:'left'}}> Motivation Letter</b>
                <input type= "file" onChange={handleChange}/>
                <div className="progessBar" style={{ width: progressHighCert}}>
                {progress}
                   
                </div>
                <br />
                <hr />

                <b style ={{textAlign:'left'}}>  German Language Certificate</b>
                <input type="file" ref={el} onChange={handleChange} />
                <div className="progessBar" style={{ width: progress }}>
                   {progress}
                </div>
               
            <hr />
            <button onClick={uploadFiles} className="upbutton">
                   Upload
            </button>
            {/* displaying received image*/}
            {data.path && <img src={data.path} alt={data.name} />}
            </div>
        </div>
    );
}

export default FileUpload;