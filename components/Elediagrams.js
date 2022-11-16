import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import { LineChart } from "react-native-chart-kit";

export default function App() {

  const priceOfTheDay =
    {
      labels: ["00", "01", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13",
        "14", "15", "16", "17", "18", "19", "20", "21", "23"],
      datasets: [
        {
          data: [
            1, 22, 13, 4, 25, 6, 17, 8, 10, 0, 11, 24, 13, 4, 15, 26, 7, 18, 9, 0, 11, 24, 3
          ]
        }
      ]
    }
  

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text>
          My Line Chart
        </Text>
        <LineChart
          data={priceOfTheDay}
          width={Dimensions.get("window").width - 10} // from react-native
          height={220}
          //xAxisLabel="klo"
          yAxisLabel="snt/kWh"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "yellow",
            backgroundGradientFrom: "blue",
            backgroundGradientTo: "pink",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //nää on pakollisia, ei hajuakaan mitä nää tekee
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //nää on pakollisia, ei hajuakaan mitä nää tekee
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              strokeWidth: "2",
              stroke: "black" //palleroiden väri
            }
          }}
          bezier
          style={{
            marginVertical: 8,
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
