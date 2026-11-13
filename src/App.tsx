import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import PostItem from './components/post-item/PostItem'
import PopularPostsTitle from './components/popular-posts/PopularPostsTitle'
import RecentPostItem from './components/recent-posts/RecentPostItem'
import RecentPostsTitle from './components/recent-posts/RecentPostsTitle'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="posts" aria-labelledby="posts-title">
          <PopularPostsTitle />
          <div className="posts-list">
            <PostItem
              href="https://xeory.jp/extension/demo-top"
              imageSrc="https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample02.jpg"
              imageAlt="サンプル画像"
              category="カテゴリー#1"
              title="テスト投稿"
              rank={1}
            />
            <PostItem
              href="https://xeory.jp/extension/extension-cta"
              imageSrc="https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample04.jpg"
              imageAlt="サンプル画像"
              category="カテゴリー#1"
              title="テスト投稿"
              rank={2}
            />
            <PostItem
              href="https://xeory.jp/extension/facebook-likebox"
              imageSrc="https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample01.jpg"
              imageAlt="サンプル画像"
              category="カテゴリー#4"
              title="テスト投稿"
              rank={3}
            />
            <PostItem
              href="https://xeory.jp/extension/wp-gallery"
              imageSrc="https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample03.jpg"
              imageAlt="サンプル画像"
              category="カテゴリー#2"
              title="テスト投稿"
              rank={4}
            />
            <PostItem
              href="https://xeory.jp/extension/xeorybase-social-media"
              imageSrc="https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample05.jpg"
              imageAlt="サンプル画像"
              category="カテゴリー#3"
              title="テスト投稿"
              rank={5}
            />
          </div>
        </section>
        <section className="posts" aria-labelledby="recent-posts-title">
          <RecentPostsTitle />
          <div className="posts-list">
            <RecentPostItem
              href="https://xeory.jp/extension/demo-top"
              imageSrc="https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample02.jpg"
              imageAlt="サンプル画像"
              category="カテゴリー#1"
              title="テスト投稿"
              dateTime="2014-10-24"
              year="2014"
              monthAndDay="10/24"
            />
            <RecentPostItem
              href="https://xeory.jp/extension/extension-cta"
              imageSrc="https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample04.jpg"
              imageAlt="サンプル画像"
              category="カテゴリー#1"
              title="テスト投稿"
              dateTime="2014-10-24"
              year="2014"
              monthAndDay="10/24"
            />
            <RecentPostItem
              href="https://xeory.jp/extension/facebook-likebox"
              imageSrc="https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample01.jpg"
              imageAlt="サンプル画像"
              category="カテゴリー#4"
              title="テスト投稿"
              dateTime="2014-10-24"
              year="2014"
              monthAndDay="10/24"
            />
            <RecentPostItem
              href="https://xeory.jp/extension/xeorybase-social-media"
              imageSrc="https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample05.jpg"
              imageAlt="サンプル画像"
              category="カテゴリー#3"
              title="テスト投稿"
              dateTime="2014-10-24"
              year="2014"
              monthAndDay="10/24"
            />
            <RecentPostItem
              href="https://xeory.jp/extension/wp-gallery"
              imageSrc="https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample03.jpg"
              imageAlt="サンプル画像"
              category="カテゴリー#2"
              title="テスト投稿"
              dateTime="2014-10-24"
              year="2014"
              monthAndDay="10/24"
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
