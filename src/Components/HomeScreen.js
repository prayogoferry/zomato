import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { getZomato, zomatoDetail } from '../Redux/Actions'
import Card from './Card';

class HomeScreen extends React.Component {
    componentDidMount() {
        this.props.getZomato()
    }

    onCardClick = (item) => {
        console.log('terpencet')
        this.props.zomatoDetail(item)
        this.props.navigation.navigate('Detail')
    }

    renderCard = () => {
        return this.props.zomato.map((item, index) => {
            console.log('item nih')
            console.log(item.restaurant.name)
            return (
                <TouchableWithoutFeedback
                    onPress={() => this.onCardClick(item)}
                    key={index}

                >
                    <View style={{ width: '50%', height: 'auto' }}>
                        <Card val={item.restaurant} />
                    </View>
                </TouchableWithoutFeedback>
            )
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{ icon: 'ticket', type: 'entypo', color: 'white' }}
                    containerStyle={{
                        backgroundColor: 'tomato',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 : -25,
                        elevation: 2
                    }}
                    rightComponent={{ text: `Hallo,${this.props.username.user}`, style: { color: 'white', fontWeight: '700' } }}
                >
                </Header>
                <ScrollView>

                    <View style={styles.icons}>
                        <View style={styles.icon}>
                            <Icon name='credit-card' size={40} color='tomato' />
                            <Text style={styles.iconText}>credit</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name='food-variant' type='material-community' size={40} color='tomato' />
                            <Text style={styles.iconText}>variant</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name='food-fork-drink' type='material-community' size={40} color='tomato' />
                            <Text style={styles.iconText}>receipe</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name='location-on' size={40} color='tomato' />
                            <Text style={styles.iconText}>location</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name='shopping-cart' size={40} color='tomato' />
                            <Text style={styles.iconText}>cart</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name='pizza' type='material-community' size={40} color='tomato' />
                            <Text style={styles.iconText}>pizza</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name='hamburger' type='material-community' size={40} color='tomato' />
                            <Text style={styles.iconText}>burger</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name='more-horiz' size={40} color='tomato' />
                            <Text style={styles.iconText}>more</Text>
                        </View>
                        <View style={styles.card}>
                            {this.renderCard()}
                        </View>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconStyle: {
        borderColor: 'tomato',
        borderWidth: 1,
        width: 50,
        borderRadius: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'

    },
    icons: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
    ,
    icon: {
        height: 70, width: 70,
        margin: 10,
        // backgroundColor : 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'tomato'
    },
    iconText: {
        fontSize: 14,
        textTransform: 'capitalize',
        color: 'black'
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
})

const mapStateToProps = ({ username, zomato }) => {
    return { username, zomato }
}

export default connect(mapStateToProps, { getZomato, zomatoDetail })(HomeScreen);