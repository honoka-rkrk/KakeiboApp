import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';

import CircleButton from '../../../Utils/components/circleButton';


type BudgetProps = {
    onPress: () => void
}

const Budget:React.FC<BudgetProps> = (props:BudgetProps) => {
    const {onPress = () => undefined} = props;
    return(
        
        <View style={styles.container}>
            <View>
                {/**---日付タイトル--- */}
                <View style={styles.budgetMonth}>
                    <Text>2021年12月</Text>
                </View>
                {/**---日付タイトルEnd--- */}

                {/**---カテゴリ---*/}
                <View>

                    {/**---収入---*/}
                    <View>
                        <View style={styles.budgetCategory}>
                            <Text>収入</Text>
                        </View>
                        <View>
                            <View style={styles.budgetCategoryItem}>
                                <View style={styles.budgetCategoryItemInner}>
                                    <TextInput style={styles.budgetCategoryItemTitle} value={"収入１"} />
                                    <TextInput style={styles.budgetCategoryItemData} value={"１０００"} />
                                </View>
                            </View>
                            <View style={styles.budgetCategoryItem}>
                                <View style={styles.budgetCategoryItemInner}>
                                    <TextInput style={styles.budgetCategoryItemTitle} value={"収入２"} />
                                    <TextInput style={styles.budgetCategoryItemData} value={"２０００"} />
                                </View>
                            </View>
                        </View>
                    </View>
                    {/**---収入End---*/}

                    {/**---固定費---*/}
                    <View>
                        <View style={styles.budgetCategory}>
                            <Text>固定費</Text>
                        </View>
                        <View style={styles.budgetCategoryItem}>
                                <View style={styles.budgetCategoryItemInner}>
                                    <TextInput style={styles.budgetCategoryItemTitle} value={"固定費１"} />
                                    <TextInput style={styles.budgetCategoryItemData} value={"１０００"} />
                                </View>
                        </View>
                        <View style={styles.budgetCategoryItem}>
                                <View style={styles.budgetCategoryItemInner}>
                                    <TextInput style={styles.budgetCategoryItemTitle} value={"固定費２"} />
                                    <TextInput style={styles.budgetCategoryItemData} value={"２０００"} />
                                </View>
                        </View>
                    </View>
                    {/**---固定費End---*/}

                    {/**---生活費---*/}
                    <View>
                        <View style={styles.budgetCategory}>
                            <Text>生活費</Text>
                        </View>
                        <View style={styles.budgetCategoryItem}>
                                <View style={styles.budgetCategoryItemInner}>
                                    <TextInput style={styles.budgetCategoryItemTitle} value={"生活費１"} />
                                    <TextInput style={styles.budgetCategoryItemData} value={"１０００"} />
                                </View>
                        </View>
                        <View style={styles.budgetCategoryItem}>
                                <View style={styles.budgetCategoryItemInner}>
                                    <TextInput style={styles.budgetCategoryItemTitle} value={"生活費２"} />
                                    <TextInput style={styles.budgetCategoryItemData} value={"２０００"} />
                                </View>
                        </View>
                    </View>
                    {/**---生活費End---*/}

                </View>
                {/**---カテゴリEnd---*/}
            </View>
            <CircleButton name="check" onPress={onPress} />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
    },
    budgetMonth:{
        backgroundColor:"#00A19D",
        justifyContent:"space-between",
        paddingVertical:16,
        paddingHorizontal:19,
        alignItems:"center"
    },
    budgetCategory:{
        backgroundColor:"#e05d5d",
        justifyContent:"space-between",
        paddingVertical:16,
        paddingHorizontal:19,
        alignItems:"center"
    },
    budgetCategoryItem:{
        flexDirection: "row",
        backgroundColor:"#ffffff",
        justifyContent:"space-between",
        paddingVertical:16,
        paddingHorizontal:19,
        alignItems:"center",
        borderBottomWidth:1,
        borderColor:"rgba(0,0,0,0.15)",
    },
    budgetCategoryItemInner:{
        justifyContent:"space-between",
        flexDirection: "row",
        flex:1,
    },
    budgetCategoryItemTitle:{
        fontSize: 16,
        lineHeight: 32,
    },
    budgetCategoryItemData:{
        fontSize: 16,
        lineHeight: 32,
        color: "#848484",
    }
})

export default Budget;