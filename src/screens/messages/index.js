import { useEffect } from 'react'
import { ScrollView, View } from 'native-base'
import Loading from '../../components/loading';

import useUser from '../../service/user';
import CustomerList from './customer-list';
import BusinessList from './business-list';

const MessagesScreen = () => {
    const { userQuery } = useUser();

    if (userQuery.isLoading) return <Loading />

    return (
        <ScrollView>
            {
                userQuery.data.profile.roleId == 1
                    ? (
                        <CustomerList />
                    )
                    : (
                        <BusinessList />
                    )
            }
        </ScrollView>
    )
}

export default MessagesScreen;