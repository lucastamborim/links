import { Category } from "@/components/category";
import { colors } from "@/styles/colors";
import { Categories } from "@/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Category name={Categories[0].name} icon={Categories[0].icon} isSelected />
      <Category name={Categories[1].name} icon={Categories[1].icon} isSelected={false} />
      <Category name={Categories[2].name} icon={Categories[2].icon} isSelected={false} />
    </View>
  );
}
