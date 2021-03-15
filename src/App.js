import logo from './logo.svg';
import './Reset.css'
import './App.css';
import './Designtest.css'


function App() {
  return (
    <div className="CSSform2">

      <div class="menu">
          <div class="title">
              <img class="myphoto"/>
              <span>葉昕濠</span>
          </div>
          <ul>
              <li>Home</li>
              <li>Pag1</li>
              <li>Pag2</li>
              <li>Pag3</li>
          </ul>
          <div class="link">
              <div class="fb"></div>
              <div class="github"></div>
              <div class="twitter"></div>
          </div>
      </div>
      
      <div class="content">
          <div class="banner">
            <div class="div">
              <div class="myphoto"></div> 
              <div><h1>葉昕濠</h1><br/><span>網頁前端切版練習</span></div>
            </div>
          </div> 

          <div class="news">
            <div class="post-title">最新文章</div>
            <ul>
                <li>CSS切版練習的心得分享！</li> 
                <li>前端框架的運用及實際操作教學！</li>  
                <li>如何後端串接資料庫與資料庫正規化？</li>  
            </ul>

            <a href="https://project0313.herokuapp.com/" class="link-button">More</a>

          </div>


      </div>
      
    </div>
  );
}

export default App;
