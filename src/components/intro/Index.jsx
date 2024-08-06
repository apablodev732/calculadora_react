import { Card } from './Card';
import { Counter } from './Counter';
import { Contador } from './Contador';
import { Texto } from './Texto';
import { Usuario } from './Usuario';
export function Index_ini() {
  return (
      <div>
      <Usuario nombre="Alejandro" edad={37}/>
      <Usuario nombre="Adriana" edad={35}/>
      <Counter></Counter>
      <Contador></Contador>
      <Texto/>
      </div>
  )
}