import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { useHttpProvider } from "../providers/http"

const useMessageStream = id => {
    const client = useHttpProvider()
    const queryClient = useQueryClient()

    /*   const messageMutation = useMutation({
          mutationFn: ({ message, id }) => {
              return client.post("/task/message", { message: { text: message }, taskId: id })
          },
          onSuccess: () => queryClient.invalidateQueries({ queryKey: ["messages"] })
      }) */

    const query = useQuery({
        queryKey: ["stream", id],
        queryFn: () => {
            return client.get("/task/message/" + id)
                .then(({ data }) => data)
        },
        refetchInterval: 1000
    })

    return {
        //messageMutation,
        query
    }
}

export default useMessageStream;