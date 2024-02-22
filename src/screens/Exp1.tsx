import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View, findNodeHandle } from 'react-native'
import React, { useRef, useState } from 'react'

const { width, height } = Dimensions.get("window");

type Num_Array = number[];

const Exp1 = (): JSX.Element => {
    const [boxes, setBoxes] = useState<Num_Array>([1, 2, 3, 4, 5]);
    const ref = useRef<FlatList>(null)
    // const nodes = new Map();

    const scrollToElement = (id: number) => {
        // const node = nodes.get(id);
        // console.log("node ==>", node);
        // const position = findNodeHandle(node);
        // console.log("position ==>", position);
        ref.current?.scrollToIndex({ index: id, animated: true, viewOffset: 37 }); // flatlist
        // ref.current?.scrollToItem({ viewPosition: position, animated: true });
    };

    return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.heading, { textAlign: "center", marginVertical: 10, }]}>
                Scroll with Id
            </Text>

            <View style={{ flex: 1 }}>
                <FlatList
                    ref={ref}
                    data={boxes}
                    showsVerticalScrollIndicator={false}
                    stickyHeaderIndices={[0]}
                    ListHeaderComponent={
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', marginHorizontal: 15 }}>
                            {boxes?.map((item, idx) => (
                                <TouchableOpacity
                                    key={item}
                                    style={styles.btnBox}
                                    onPress={() => scrollToElement(idx)}
                                >
                                    <Text style={styles.sub_heading}>
                                        Box {item}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    }
                    renderItem={({ item, index }) => (
                        <>
                            {index === 0 ? <View style={{ marginTop: 10 }} /> : null}
                            <View style={styles.box}>
                                <Text style={styles.heading}>
                                    Box {item}
                                </Text>

                                <Text style={[styles.sub_heading, { color: "#000" }]}>
                                    Box {item} Sub-heading goes here
                                </Text>

                                <Text style={styles.para}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Box {item} content goes here.
                                </Text>
                            </View>
                        </>
                    )}
                />
            </View>
        </View>
    )
};

export default Exp1;

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        color: "#000",
        fontWeight: '700',
    },
    sub_heading: {
        fontSize: 15,
        color: "#fff",
        fontWeight: '500',
    },
    para: {
        fontSize: 13,
        color: "#000",
        fontWeight: '400',
    },
    box: {
        height: 400,
        backgroundColor: "#fff",
        marginHorizontal: 15,
        elevation: 5,
        marginBottom: 10,
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 20,
        rowGap: 10,
    },
    btnBox: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: "#008A04",
        borderRadius: 6,
    },
});