import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { useHttpProvider } from "../providers/http"

const useUser = () => {
    const client = useHttpProvider()
    const queryClient = useQueryClient()

    const userQuery = useQuery({
        queryKey: ["user"],
        queryFn: () => {
            return client.get("/user")
                .then(({ data }) => data)
        }
    })

    const mutation = useMutation({
        mutationFn: user => {
            return client.post("/user", user)
                .then(res => res)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user"] })
        }
    })

    return {
        userQuery,
        mutation
    }
}

export default useUser;