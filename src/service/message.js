import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { useHttpProvider } from "../providers/http"

const useMessages = () => {
    const client = useHttpProvider()
    const queryClient = useQueryClient()

    const messageMutation = useMutation({
        mutationFn: ({ message, id = "" }) => {
            return client.post("/task/message/" + id, message)
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["messages"] })
    })

    const query = useQuery({
        queryKey: ["messages"],
        queryFn: () => {
            return client.get("/task/message")
                .then(({ data }) => data)
        }
    })

    return {
        messageMutation,
        query
    }
}

export default useMessages;