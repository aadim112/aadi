import './Certifications.css'
import certificates from './certificate.json'
import { useLanguage } from '../LanguageContext';

function Certifications(){
    const { language } = useLanguage();
    const japanese = language === 'ja';
    const japaneseDescriptions = {
        'JLPT N5 Certificate': 'ひらがな、カタカナ、および基本的な漢字を含む日本語の文章を読めます。',
        'AI Agent Fundamentals': 'LLM、ツール、推論を活用して自律的にタスクを実行するAIエージェントの基礎を学びました。Hugging Faceのsmolagentsを使ったエージェントの構築と利用、Think → Act → Observeの流れも習得しました。',
        'AI-Native Vector Databases': 'Weaviateベクトルデータベースの基礎と、データの作成・読み取り・更新・削除（CRUD）操作を学びました。',
        'Machine Learning Crash Course': '回帰、分類、ニューラルネットワーク、モデル評価、勾配降下法、損失関数など、機械学習の基礎を学びました。データ準備、過学習、埋め込み、LLM、実際の機械学習システムについても演習を通じて経験しました。',
        'Data pre-processing for Machine Learning in Python': 'Pythonで機械学習用データを整える方法として、欠損値処理、カテゴリ変数のエンコード、数値特徴量の変換とスケーリングを学びました。scikit-learnのパイプライン、PCA、特徴量選択、SMOTEも扱いました。',
        'Deloitte Australia - Data Analytics Job Simulation': 'ExcelやTableauを使った実データの分析、傾向の把握、インサイトの導出を学びました。データ可視化、データモデリング、意思決定を支援するダッシュボードの作成も経験しました。',
        'Core C++ Concept': 'C++の基本概念を学びました。',
        'Introduction to Programming Using HTML and CSS': 'HTMLとCSSの基礎を学びました。',
        'JavaScript Specialist Certification': 'JavaScriptの基本概念を学び、実装しました。',
        'Python Basics': 'HackerRankのPythonアセスメントに合格し、取得しました。',
        'Zero to Mastery Learn PyTorch for Deep Learning': 'テンソル、ニューラルネットワーク、モデルの学習と評価、コンピュータービジョンなど、PyTorchとディープラーニングの基礎を学びました。転移学習、カスタムデータセット、実験管理、モデルのデプロイも実践しました。',
    };
    return(
        <div id='certifications' className='Certifications'>
            <h2 className='certification-heading'>{japanese ? '資格・講座' : 'Certifications & Courses'}</h2>
            <div className='certification-container'>
                {certificates.map((certificate) => (
                    <div className='certificate' key={certificate.id}>
                        <div className='certificate-metadata'>
                            <div className='certificare-overview'>
                                <div className='certificate-icon'>
                                    <img src={certificate.img}/>
                                </div>
                                <div className='certificate-info'>
                                    <p>{certificate.name}</p>
                                    <p>{certificate.issuer}</p>
                                    <p>{certificate.date}</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-arrow-turn-down" style={{color: "#c5050c"}}></i>
                        </div>
                        <div className='certificate-details'>
                                    <p>{japanese ? japaneseDescriptions[certificate.name] || certificate.description : certificate.description}</p>
                            <a href={certificate.link} target='_blank' rel='noreferrer'>
                                {japanese ? '証明書を見る' : 'View certificate'}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <p style={{fontFamily:'poppins',fontSize:'18px',backgroundColor:'#c50505',color:'white',padding:'0px 10px'}}>{japanese ? 'おすすめの本' : 'Books I will suggest to read'}</p>
            <div className='Book'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRenpNN3ec95dpJwEmKMyOLIv9gQy_jnoc4WLnqwJ2rA&s=10'></img>
                <div className='book-info'>
                    <h2>Build Your LLM from scratch</h2>
                    <p>Sebastian Raschka</p>
                    <p>{japanese ? 'GPTのデコーダー専用モデルを深く理解し、GPTに似たモデルを一から実装しました。Transformerの仕組みを理解するための細かな要点まで解説されています。' : 'Understood the GPT decoder-only model deeply. Also implemented a GPT-like model from scratch. The book contains all the small and required details about transformer architecture.'}</p>
                    <div style={{display:'flex', gap:'5px',marginLeft:'0px',marginTop:'10px'}}>
                        <a href='https://www.kaggle.com/code/aaditya112/creating-your-own-llm-from-0' style={{color:'#c5050c',}}><p style={{fontWeight:'500',fontFamily:'Inter',margin:'0px'}}>{japanese ? 'モデルを見る' : 'Checkout Model'}</p></a>
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{color: "#c5050c"}}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certifications;