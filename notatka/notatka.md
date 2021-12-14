Definicja useState - jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym
Definicja useEfect - Poprzez użycie tego hooka mówisz Reactowi, że twój komponent musi wykonać jakąś czynność po jego wyrenderowaniu. React zapamięta funkcję, którą przekazano do hooka (będziemy odtąd odnosić się do niej jako naszego „efektu”), a potem wywoła ją, gdy już zaktualizuje drzewo DOM.
Definicja useRef - zwraca mutowalny (ang. mutable) obiekt, którego właściwość jest inicjalizowana wartością przekazaną jako argument. Zwrócony obiekt będzie trwał przez cały cykl życia komponentu.







1. Czym jest useState
- jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym

2. Co robi useState
- Deklaruje ono „zmienną stanu”

3. Napisz kod odpowiedzialny za import UseState i jego poczatkową deklaracje

import React, { useState } from 'react';
const [count, setCount] = useState(0);