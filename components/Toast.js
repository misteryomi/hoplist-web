import React from 'react'
import { useToasts } from 'react-toast-notifications'
import { Button } from 'reactstrap';

const Toast = ({ content, title }) => {
  const { addToast } = useToasts()
    console.log({content})

  return (
    <Button className="btn btn-success" onClick={() => addToast('Link copied successfully!', {
      appearance: 'success',
      autoDismiss: true,
    })}>
      {title}
    </Button>
  )
}

export default Toast;