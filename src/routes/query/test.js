import { client } from '$lib/Client.js';
import { gql } from '@apollo/client/core/core.cjs.js';

export const post = async request => {
    const { num } = request.body;

    try {
        const query = gql`
            query Doubled($x: Int) {
                double(number: $x)
            }
        `;
        const result = await client.query({
            query,
            variables: { x: num }
        });

        return {
            status: 200,
            body: {
                nodes: result.data.double
            }
        }
    } catch (err) {
        return {
            status: 500,
            error: 'Error retrieving data'
        }
    }
}