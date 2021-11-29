import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';

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

            <ScrollView>
                <View style={styles.calc}>
                    <View style={styles.sumIncome}>
                        <Text>収入</Text>
                        <Text>3000</Text>
                    </View>
                    <View style={styles.sumOutcome}>
                        <View style={styles.sumOutcomeItem}>
                            <Text>固定費</Text>
                            <Text>3000</Text>
                        </View>
                        <View style={styles.sumOutcomeItem}>
                            <Text>生活費</Text>
                            <Text>3000</Text>
                        </View>
                    </View>
                    <View style={styles.difference}>
                        <Text>差額</Text>
                        <Text>3000</Text>
                    </View>
                </View>
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
                                    <Text style={styles.budgetCategoryItemTitle}>収入１</Text>
                                    <Text style={styles.budgetCategoryItemData}>１０００</Text>
                                </View>
                            </View>
                            <View style={styles.budgetCategoryItem}>
                                <View style={styles.budgetCategoryItemInner}>
                                    <Text style={styles.budgetCategoryItemTitle}>収入２</Text>
                                    <Text style={styles.budgetCategoryItemData}>２０００</Text>
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
                                    <Text style={styles.budgetCategoryItemTitle}>固定費１</Text>
                                    <Text style={styles.budgetCategoryItemData}>１０００</Text>
                                </View>
                        </View>
                        <View style={styles.budgetCategoryItem}>
                                <View style={styles.budgetCategoryItemInner}>
                                    <Text style={styles.budgetCategoryItemTitle}>固定費２</Text>
                                    <Text style={styles.budgetCategoryItemData}>２０００</Text>
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
                                    <Text style={styles.budgetCategoryItemTitle}>生活費１</Text>
                                    <Text style={styles.budgetCategoryItemData}>１０００</Text>
                                </View>
                        </View>
                        <View style={styles.budgetCategoryItem}>
                                <View style={styles.budgetCategoryItemInner}>
                                    <Text style={styles.budgetCategoryItemTitle}>生活費２</Text>
                                    <Text style={styles.budgetCategoryItemData}>２０００</Text>
                                </View>
                        </View>
                    </View>
                    {/**---生活費End---*/}

                </View>
                {/**---カテゴリEnd---*/}
            </ScrollView>
            </View>
            <CircleButton name="edit-2" onPress={onPress} />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
    },
    calc:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingVertical:16,
        paddingHorizontal:19,
        alignItems:"center"
    },
    sumIncome:{
        backgroundColor:"#ffb344",
        paddingVertical:16,
        paddingHorizontal:19,
        borderRadius:4,
        textAlign:'center',
    },
    sumOutcome:{
        backgroundColor:"#e05d5d",
        borderRadius:4,
        flexDirection:'row',
        textAlign:'center',
    },
    sumOutcomeItem:{
        paddingVertical:16,
        paddingHorizontal:19,
    },
    difference:{
        backgroundColor:"#00A19D",
        paddingVertical:16,
        paddingHorizontal:19,
        borderRadius:4,
        textAlign:'center',
    },
    budgetMonth:{
        backgroundColor:"#00A19D",
        justifyContent:"space-between",
        paddingVertical:16,
        paddingHorizontal:19,
        alignItems:"center"
    },
    budgetCategory:{
        backgroundColor:"#00A19D",
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