import { useReducer } from 'react'
import { Modal, FormControl, Input, Button } from 'native-base'

import useMessages from '../../service/message'

const ContactMessageModal = ({ modalVisible, setModalVisible, activeId }) => {
    const [state, dispatch] = useReducer((state, action) => {
        return { ...state, ...action }
    }, {
        price: "",
        firstMessage: ""
    })

    const { messageMutation } = useMessages()

    return (
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} >
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Svar opgave</Modal.Header>
                <Modal.Body>
                    <FormControl>
                        <FormControl.Label>Pris</FormControl.Label>
                        <Input
                            onChangeText={v => dispatch({ price: v })}
                            value={state.price}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Besked</FormControl.Label>
                        <Input
                            onChangeText={v => dispatch({ firstMessage: v })}
                            value={state.firstMessage}
                        />
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button 
                            variant="unstyled" 
                            onPress={() => {
                                setModalVisible(false);
                            }}
                            bg={"fmf.primary"}
                        >
                            Luk
                        </Button>
                        <Button
                            onPress={() => {
                                messageMutation.mutate({
                                    message: {
                                        text: state.price + " " + state.firstMessage
                                    },
                                    id: activeId
                                })
                            }}
                            variant="unstyled"
                        >
                            Send
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}

export default ContactMessageModal