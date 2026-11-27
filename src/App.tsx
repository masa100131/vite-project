import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import { CompanyField } from './components/company/CompanyField'
import Feature from './components/feature/Feature'
import Footer from './components/footer/Footer'
import { InquiryField } from './components/inquiry/InquiryField'
import { InquirySubmit } from './components/inquiry/InquirySubmit'
import PostItem from './components/post-item/PostItem'
import PostTitle from './components/post-title/PostTitle'
import RecentPostItem from './components/recent-posts/RecentPostItem'
import SectionTitle from './components/section-title/SectionTitle'
import Service from './components/service/Service'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="posts" aria-labelledby="posts-title">
          <PostTitle id="posts-title" title="人気のある記事" />
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
          <PostTitle id="recent-posts-title" title="最近の投稿" />
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
        <section className="features" aria-label="Xeory Extensionの特徴">
          <SectionTitle title="Xeory Extensionの特徴" label="feature" />
          <Feature
            number={1}
            title="モバイルレスポンシブ"
            subtitle="Mobile Responsive"
            text="Xeory Extensionはレスポンシブデザインを採用しています。スマートフォンやタブレットなど各種デバイスで表示が最適化されます。"
            imageSrc="https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample03.jpg"
          />
          <Feature
            number={2}
            title="HTML5デザイン"
            subtitle="HTML5 Design"
            text="Xeory ExtensionはHTML5言語でデザイン及びコーディングがなされています。"
            reverse
            imageSrc="https://xeory.jp/extension/wp-content/uploads/sites/4/2014/10/two-coffee-at-the-shop.jpg"
          />
          <Feature
            number={3}
            title="SEO最適化"
            subtitle="Search Engine Optimized"
            text="Xeory ExtensionはGoogleのSEOガイドラインに可能な限り沿った構造になっています。必要なのは良質なコンテンツだけです。"
            imageSrc="https://xeory.jp/extension/wp-content/uploads/sites/4/2014/10/imac-glasses-desk.jpg"
          />
          <Feature
            number={4}
            title="高いカスタマイズ性"
            subtitle="Customizable"
            text="Xeory Extensionはカスタマイズフリーです。CSS, HTML, PHPの知識があれば自由にカスタマイズすることができます。"
            reverse
            imageSrc="https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample04.jpg"
          />
        </section>
        <section className="services" aria-label="サービス紹介">
          <SectionTitle title="サービス紹介" label="service" />
          <div className="services-list">
            <Service
              title="Xeoryカスタマイズ"
              subtitle="Xeory Customize"
              href="https://xeory.jp/design-examples/"
              linkLabel="カスタマイズ事例を見る"
            />
            <Service
              title="コンテンツマーケティング"
              subtitle="Content Marketing"
              href="https://lucy.ne.jp/bazubu/case"
              linkLabel="コンテンツマーケティング成功事例を見る"
            />
          </div>
        </section>
        <SectionTitle title="会社紹介" label="company" />
        <section className="company" aria-label="会社情報">
          <dl className="company-info">
            <CompanyField label="会社名" value="株式会社ルーシー" />
            <CompanyField label="電話番号" value="03-6452-9355" />
            <CompanyField
              label="住所"
              value="東京都港区新橋5丁目10-5 PMO新橋II 8F"
            />
          </dl>
        </section>
        <section className="contact" aria-label="お問い合わせ">
          <SectionTitle title="お問い合わせ" label="inquiry" />
          <form className="inquiry-form" action="#" method="post">
            <dl className="inquiry-form-list">
              <InquiryField
                id="inquiry-name"
                label="お名前（必須）"
                name="name"
                fieldType="text"
                required
              />
              <InquiryField
                id="inquiry-email"
                label="メールアドレス（必須）"
                name="email"
                fieldType="email"
                required
              />
              <InquiryField
                id="inquiry-subject"
                label="題名"
                name="subject"
                fieldType="text"
              />
              <InquiryField
                id="inquiry-message"
                label="メッセージ本文"
                name="message"
                fieldType="textarea"
                rows={8}
              />
              <dt className="inquiry-row" />
              <dd className="inquiry-row">
                <InquirySubmit />
              </dd>
            </dl>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
