import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import CircleButton from '../../../Utils/components/circleButton';

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
            </View>
            <CircleButton name="edit-2" onPress={onPress} />
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

export default BudgetEdit;