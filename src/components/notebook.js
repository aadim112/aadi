import './notebook.css'

function notebook(){
    return(
        <div className='notebook'>
            <div className="band">
                <h2>Notebooks</h2>
            </div>
            <div className='notebook-container'>
                <p style={{fontFamily: 'Inter'}}>Upvote my Notebooks on <a href="https://www.kaggle.com/aaditya112" style={{textDecoration: 'none', color: 'rgb(56,196,254)'}} target="_blank" rel="noopener noreferrer">Kaggle</a> profile.</p>
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
                    <img src='https://www.kaggle.com/competitions/127720/images/header' alt='someting'></img>
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