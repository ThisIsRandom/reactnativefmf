import { Button, ScrollView } from 'native-base'
import { useEffect, useState } from 'react';
import MUIIcon from 'react-native-vector-icons/MaterialIcons'
import Loading from '../../components/loading';
import useAdvertisements from '../../service/advertisement';
import useUser from '../../service/user';
import CreateModal from './create-modal';
import SingleItem from './single-item';

const AdvertisementScreen = ({ navigation }) => {
    const { query } = useAdvertisements();
    const [modalVisible, setModalVisible] = useState(false)
    const { userQuery } = useUser()

    useEffect(() => {
        if (!userQuery.data || userQuery.data.profile.roleId == 1) return

        navigation.setOptions({
            headerRight: () => (
                <Button
                    variant="unstyled"
                    onPress={() => setModalVisible(p => !p)}
                >
                    <MUIIcon
                        name="add"
                        size={30}
                        color="black"
                    />
                </Button>
            ),
        });
    }, [userQuery.data])

    if (query.isLoading || userQuery.isLoading) return <Loading />

    return (
        <>
            <ScrollView
                padding={5}
            >
                {
                    query.data.map(i => {
                        return (
                            <SingleItem>
                                {i.description}
                            </SingleItem>
                        )
                    })
                }
            </ScrollView>
            <CreateModal
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
            />
        </>
    )
}

export default AdvertisementScreen;