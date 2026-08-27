import './notebook.css'

function notebook(){
    return(
        <div className='notebook'>
            <div className="band">
                <h2>Notebooks</h2>
            </div>
            <div className='notebook-container'>
                <div className='NT'>
                    <img src='https://res.cloudinary.com/dbulfrlrz/images/f_auto,q_auto/v1756814050/wp-pme/llm_blog_cover2x-2/llm_blog_cover2x-2.png?_i=AA' alt='someting'></img>
                    <div className='NT-info'>
                        <a href='' style={{color:'#c5050c'}}><h2>Transformers And There Working Simplified</h2></a>
                        <p>Kaggle</p>
                    </div>

                </div>

                <div className='NT'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7iirtVw3xiv7nSfwnh15EVAMrBuA5-PT9O_GlHAx62iUODlaCh1gY98&s=10' alt='someting'></img>
                    <div className='NT-info'>
                        <a href='https://colab.research.google.com/drive/1PjDhsOpfdS3ARfdrvEbphgRlXXmGnF-u?usp=sharing' style={{color:'#c5050c'}}><h2>E-commerce Refined </h2></a>
                        <p>Collab</p>
                    </div>
                </div>


                <div className='NT'>
                    <img src='https://storage.googleapis.com/kaggle-competitions/kaggle/127720/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1787767228&Signature=hia5lWi4J6rEL0Qj4nSbVlARwybAwai7GiGitBfM8aTuqCPV4tkNhkarjF%2FlsriMQlMGmMayNzjhbrHd2Nh1Zto4nlKnEokT%2Be9Ii3NdQEmqyvTiczfKMhq2waUTdJK7z5dguBbh%2BCKTCTz77oo2JWc%2FE8kvXIjdnyrb4LzEFkquwf7TWJg0eXtF7LpD6dnjQ59CWPb%2BDI%2FrexzgoWF4QTg5b%2Bni5oMYLRyxM2lO3QxUdKWL3lQ5dx9JwHj%2ByJo9J%2FgwxVcVli6b3k1nrpU6RpTEyVpHLRgSatRiCmDVVoNASzq%2BSm4BUufIdYmuCGv242zrVZKkZ2G3IC1sDJ%2Bw4w%3D%3D&t=2026-01-11-11-50-11' alt='someting'></img>
                    <div className='NT-info'>
                        <a href='https://www.kaggle.com/code/aaditya112/flood-prediction-with-k-fold' style={{color:'#c5050c'}}><h2>Flood Prediction with K-Fold</h2></a>
                        <p>Kaggle</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default notebook;