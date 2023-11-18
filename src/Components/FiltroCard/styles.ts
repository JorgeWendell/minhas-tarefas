import style from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = style.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#A1A1A1')};
  backgroud-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
  `

export const Contador = style.span`

  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = style.span`
  font-size: 14px;
`
