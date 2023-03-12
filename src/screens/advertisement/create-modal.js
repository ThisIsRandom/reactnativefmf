import { Modal, FormControl, Input, Button } from "native-base";
import { useState } from 'react';

import useAdvertisements from "../../service/advertisement";
import useUser from "../../service/user";

const CreateModal = ({ modalVisible, setModalVisible }) => {
    const { mutation } = useAdvertisements()

    const [description, setDescription] = useState("")

    return (
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} >
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Opret annonce</Modal.Header>
                <Modal.Body>
                    <FormControl>
                        <FormControl.Label>Description</FormControl.Label>
                        <Input
                            value={description}
                            onChangeText={setDescription}
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
                        <Button onPress={() => {
                            mutation.mutate({ description })
                        }}>
                            Opret
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}

export default CreateModal;