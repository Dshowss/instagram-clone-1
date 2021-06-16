import React from 'react'
import styles from '@modules/Button.module.scss'

const Button = ({background = true, disabled, block = true, loading = false, children}) => {
  return (
    <button className={`${styles.Button} ${!block && styles.Inline} ${!background && styles.Transparent } ${disabled && styles.Disabled}`} disabled={disabled}>
      {
        loading ? (
          <svg height="26px" style={{marginTop: '2px'}} viewBox="0 0 50 50">
            <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
              <animateTransform attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"/>
            </path>
          </svg>
        ) : (
          children
        )
      }
    </button>
  )
}

export default Button
