import './Inquiry.css'

export function Inquiry() {
  return (
    <form className="inquiry-form" action="#" method="post">
      <dl className="inquiry-form-list">
        <dt className="inquiry-row">
          <label className="inquiry-label" htmlFor="inquiry-name">
            お名前（必須）
          </label>
        </dt>
        <dd className="inquiry-row">
          <input
            className="inquiry-input"
            type="text"
            id="inquiry-name"
            name="name"
            required
          />
        </dd>
        <dt className="inquiry-row">
          <label className="inquiry-label" htmlFor="inquiry-email">
            メールアドレス（必須）
          </label>
        </dt>
        <dd className="inquiry-row">
          <input
            className="inquiry-input"
            type="email"
            id="inquiry-email"
            name="email"
            required
          />
        </dd>
        <dt className="inquiry-row">
          <label className="inquiry-label" htmlFor="inquiry-subject">
            題名
          </label>
        </dt>
        <dd className="inquiry-row">
          <input
            className="inquiry-input"
            type="text"
            id="inquiry-subject"
            name="subject"
          />
        </dd>
        <dt className="inquiry-row">
          <label className="inquiry-label" htmlFor="inquiry-message">
            メッセージ本文
          </label>
        </dt>
        <dd className="inquiry-row">
          <textarea
            className="inquiry-textarea"
            id="inquiry-message"
            name="message"
            rows={8}
          />
        </dd>
        <dt className="inquiry-row" />
        <dd className="inquiry-row">
          <button className="inquiry-submit" type="submit">
            送信
          </button>
        </dd>
      </dl>
    </form>
  )
}

export default Inquiry
