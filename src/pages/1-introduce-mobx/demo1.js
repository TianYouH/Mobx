/**
 * Created by tdzl2003 on 1/20/17.
 */

import { observable, autorun } from 'mobx';

export default function demo1() {
  const value = observable(0);
  const value2 = observable('123')
  autorun(() => {
    console.log(`Value is: ${value.get()}`);
  });
  autorun(() => {
    console.log(`Value is: ${value2.get()}`);
  });
  value.set(2);
  value.set(8);
  value.set(-3);
  value2.set(99);
  value2.set('huang');
  value2.set('jin');
}
