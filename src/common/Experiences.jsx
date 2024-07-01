import React from 'react'

function Experiences({src, desg, datetime, exptext}) {
  return (
    <div>
     {/* <div className={styles.experienceContainer}> */}
            <div className={styles.imgbox}>
                <img src={src} alt="" className={styles.corpImg} />
            </div>
            <div className={styles.textbox}>
                <h3 className={styles.designation}>{desg}</h3>
                <p className={styles.datetime}>{datetime}</p>
                <br />
                <p className={styles.exptext}> {exptext}</p>
            </div>
         {/* </div> */}
        </div>

        
  )
}

export default Experiences