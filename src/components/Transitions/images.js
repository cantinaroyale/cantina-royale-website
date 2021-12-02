
const arr =  "wxqlQkh,G2Whuq3,0bUSEBX,giP58XN,iKdXwVm,IvpoR40,zJIxPEo,CKlmtPs,fnMylHI,vGXYiYy,MnOB9Le,YqsZKgc,0BJobQo,Otbz312"
  .split(",")
  .map((id) => `https://i.imgur.com/${id}.jpg`)



  const createImages = () => {
    let res = []
    for(let i = 0; i < 40; i++ ){
      res = [...res, ...arr ]
    }
    return res
  }


const images = createImages()


export default images