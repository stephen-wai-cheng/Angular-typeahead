import { marbles } from 'rxjs-marbles';
import 'rxjs/add/operator/map';

describe('rxjs-marbles', () => {

    it('should support marble tests', marbles((m) => {

        const values = { a: 1, b: 2, c: 3, d: 4 };

        const source = m.hot('--^-a-b-c-|', values);
        const subs = '^-------!';
        const expected = m.cold('--b-c-d-|', values);

        const destination = source.map((value) => value + 1);

        destination.subscribe(
            results => {
                console.log('results:');
                console.log(results);
            }
        );

        m.expect(destination).toBeObservable(expected);
        m.expect(source).toHaveSubscriptions(subs);

    }));
});
