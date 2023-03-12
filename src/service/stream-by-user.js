import { useQuery, useQueryClient } from '@tanstack/react-query'

import { useHttpProvider } from "../providers/http"

const useStreamByUser = () => {
    const client = useHttpProvider()
    const queryClient = useQueryClient()

    /*   const messageMutation = useMutation({
          mutationFn: ({ message, id }) => {
              return client.post("/task/message", { message: { text: message }, taskId: id })
          },
          onSuccess: () => queryClient.invalidateQueries({ queryKey: ["messages"] })
      }) */

    const query = useQuery({
        queryKey: ["user-streams"],
        queryFn: () => {
            return client.get("/task/message/streams")
                .then(({ data }) => data)
        }
    })

    return {
        //messageMutation,
        query
    }
}

export default useStreamByUser;