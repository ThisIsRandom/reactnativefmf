import { View, Text, Button, ScrollView, VStack, Pressable } from 'native-base'
import { useState, useEffect } from 'react'
import Loading from '../../components/loading';
import useTasks from '../../service/task';
import useUser from '../../service/user';
import ContactMessageModal from './contact-message-modal';

import CreateTaskModal from './create-task-modal';
import SingleTask from './single-task';

const TasksScreen = ({ navigation }) => {
    const [createModalVisible, setCreateModalVisible] = useState(false)
    const [messageModalVisible, setMessageModalVisible] = useState(false)
    const [activeId, setActiveId] = useState(null)

    const { userQuery } = useUser()
    const { query } = useTasks()

    if (query.isLoading || userQuery.isLoading) return <Loading />

    return (
        <>
            <View
                flex={1}
            >
                <ScrollView
                    flex={1}
                >
                    {
                        query.data.length
                            ? (
                                query.data.map((task, idx) => {
                                    return (
                                        <Pressable
                                            key={idx}
                                            onPress={() => navigation.navigate("task-detail", { taskId: task.ID })}
                                        >
                                            <SingleTask
                                                business={userQuery.data.profile.roleId != 1}
                                                onClickMessage={() => {
                                                    setActiveId(task.ID)
                                                    setMessageModalVisible(true)
                                                }}
                                            >
                                                <VStack
                                                    py={2}
                                                >
                                                    <Text
                                                        fontWeight="bold"
                                                    >
                                                        {task.title}
                                                    </Text>
                                                    <Text>
                                                        {task.description}
                                                    </Text>
                                                </VStack>
                                            </SingleTask>
                                        </Pressable>
                                    )
                                })
                            )
                            : (
                                <Text>
                                    Ingen opgaver
                                </Text>
                            )
                    }
                </ScrollView>
                <Button
                    onPress={() => setCreateModalVisible(p => !p)}
                >
                    Create Task
                </Button>
            </View>
            <CreateTaskModal
                modalVisible={createModalVisible}
                setModalVisible={setCreateModalVisible}
            />
            <ContactMessageModal
                modalVisible={messageModalVisible}
                setModalVisible={setMessageModalVisible}
                activeId={activeId}
            />
        </>
    )
}

export default TasksScreen;