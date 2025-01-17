import React from 'react';
import {Layout} from '../components';
import {gql, useQuery} from "@apollo/client";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

const TRACKS = gql`
    query getTracks {
        tracksForHome {
            id
            title
            thumbnail
            length
            modulesCount
            author {
                id
                name
                photo
            }
        }
    }
`

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
    const {loading, data, error,} = useQuery(TRACKS)

    return (
        <Layout grid>
            <QueryResult loading={loading} data={data} error={error}>
                {data?.tracksForHome.map(track => (
                    <TrackCard key={track.id} track={track}/>
                ))}
            </QueryResult>
        </Layout>
    )
};

export default Tracks;
