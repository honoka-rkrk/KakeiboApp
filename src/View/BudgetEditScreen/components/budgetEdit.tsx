import React from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView} from 'react-native';
import CircleButton from '../../../Utils/components/circleButton';
import {Feather} from '@expo/vector-icons';

type BudgetEditProps = {
    onPress: () => void
}

const BudgetEdit:React.FC<BudgetEditProps> = (props:BudgetEditProps) => {
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
                {/**---カテゴリ---*/}
                <View>

                    {/**---収入---*/}
                    <View>
                        <View style={styles.budgetCategoryIncome}>
                            <View style={styles.budgetCategoryTitleSum}>
                                <Text style={styles.budgetCategoryTitle}>収入</Text>
                                <Text style={styles.budgetCategorySum}>3000</Text>
                            </View>
                            <Feather name="plus" size={16} color="rgba(255,255,255,0.6)" />
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
                        <View style={styles.budgetCategoryOutcome}>
                            <View style={styles.budgetCategoryTitleSum}>
                                <Text style={styles.budgetCategoryTitle}>固定費</Text>
                                <Text style={styles.budgetCategorySum}>3000</Text>
                            </View>
                            <Feather name="plus" size={16} color="rgba(255,255,255,0.6)" />
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
                        <View style={styles.budgetCategoryOutcome}>
                            <View style={styles.budgetCategoryTitleSum}>
                                <Text style={styles.budgetCategoryTitle}>生活費</Text>
                                <Text style={styles.budgetCategorySum}>3000</Text>
                            </View>
                            <Feather name="plus" size={16} color="rgba(255,255,255,0.6)" />
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
            </ScrollView>
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
    budgetCategoryIncome:{
        backgroundColor:"#ffb344",
        justifyContent:"space-between",
        paddingVertical:16,
        paddingHorizontal:19,
        alignItems:"center",
        flexDirection: "row",
    },
    budgetCategoryOutcome:{
        backgroundColor:"#e05d5d",
        justifyContent:"space-between",
        paddingVertical:16,
        paddingHorizontal:19,
        alignItems:"center",
        flexDirection: "row",
    },
    budgetCategoryTitleSum:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection: "row",
    },
    budgetCategoryTitle:{
        fontSize: 16,
        lineHeight: 32,
        color:'#ffffff',
        paddingRight:19,
    },
    budgetCategorySum:{
        backgroundColor:'#ffffff',
        borderRadius:4,
        fontSize: 16,
        lineHeight: 32,
        paddingHorizontal:19,
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

export default BudgetEdit;