import './InquiryField.css'

export interface InquiryFieldProps {
  id: string
  label: string
  name: string
  fieldType: 'text' | 'email' | 'textarea'
  required?: boolean
  rows?: number
}

export function InquiryField(props: InquiryFieldProps) {
  return (
    <>
      <dt className="inquiry-row">
        <label className="inquiry-label" htmlFor={props.id}>
          {props.label}
        </label>
      </dt>
      <dd className="inquiry-row">
        {props.fieldType === 'textarea' ? (
          <textarea
            className="inquiry-textarea"
            id={props.id}
            name={props.name}
            rows={props.rows ?? 8}
            required={props.required}
          />
        ) : (
          <input
            className="inquiry-input"
            type={props.fieldType}
            id={props.id}
            name={props.name}
            required={props.required}
          />
        )}
      </dd>
    </>
  )
}

export default InquiryField
