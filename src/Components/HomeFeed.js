import React from 'react'
import { View, ScrollView } from 'react-native'

import { GroupComponent } from '.'

const HomeFeed = ({ groups, width }) => {
    return (
        <ScrollView>
            <View style={{ width: width * .95, alignSelf: 'center', marginTop: width * .15 }}>
                <View style={{ flexDirection: 'row' }}>

                </View>
                {
                    groups.map((group, id) =>
                        <GroupComponent
                            key={id}
                            group={group}
                        />
                    )
                }
            </View>
        </ScrollView>
    )
}

export { HomeFeed }