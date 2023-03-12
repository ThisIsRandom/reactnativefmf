import { useReducer } from 'react'
import { Modal, FormControl, Input, Button } from 'native-base'
import useTasks from '../../service/task'

const CreateTaskModal = ({ modalVisible, setModalVisible }) => {
    const [state, dispatch] = useReducer((state, action) => {
        return { ...state, ...action }
    }, {
        title: "",
        description: ""
    })

    const { mutation } = useTasks();

    return (
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} >
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Opret opgave</Modal.Header>
                <Modal.Body>
                    <FormControl>
                        <FormControl.Label>Title</FormControl.Label>
                        <Input
                            onChangeText={v => dispatch({ title: v })}
                            value={state.title}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Description</FormControl.Label>
                        <Input
                            onChangeText={v => dispatch({ description: v })}
                            value={state.description}
                        />
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                            setModalVisible(false);
                        }}>
                            Luk
                        </Button>
                        <Button
                            onPress={() => mutation.mutate(state)}
                        >
                            Opret
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}

export default CreateTaskModal