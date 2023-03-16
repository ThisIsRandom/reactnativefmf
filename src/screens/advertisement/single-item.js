import { Text, View, Image } from 'native-base'
import { useToken } from 'native-base';

const SingleItem = ({ children }) => {
    const [primaryColor, secondaryColor] = useToken(
        'colors',
        ['fmf.primary', 'fmf.secondary']
    );

    return (
        <View
            style={{
                backgroundColor: "rgba(0,0,0,.2)"
            }}
            h={250}
            justifyContent="center"
            alignItems="center"
            borderWidth={2}
            rounded={8}
            borderColor={primaryColor}
            overflow={"hidden"}
        >
            <Image 
                source={require("../../../images/sale.jpg")}
                w={"100%"}
                h={"80%"}
                resizeMode={"stretch"}
            />
            <View
                style={{
                    width: "100%",
                    height: "20%",
                    backgroundColor: primaryColor
                }}
                alignItems={"center"}
                justifyContent={"center"}

            >
                <Text
                    color="white"
                >
                    {children}
                </Text>
            </View>
        </View>
    )
}

export default SingleItem;