# Basic Zustand and Pagination implementation

Menurut saya, sekilas penggunaan zustand/state management ini berfungsi untuk menghindari mengubah nilai state secara langsung. Contoh:
```jsx
const [count, setCount] = useState(0);
```

Jika kita ingin melakukan perbahan terhadap nilai count, maka menggunakan setCount(). Hal ini bisa langsung dilakukan jika posisi pemanggilan itu dalam satu komponen dengan deklarasi state diatas, namun jika tidak:
```jsx
export function app() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      Total count: {count}
      <AddCountButton setCount={setCount} />
    </div>
  )
}
export function AddCountButton({ setCount }) {
  return (
    <button onClick={() => setCount(prev => prev + 1)}>+</button>
  )
}
```

Disini saya melakukan passing terhadap fungsi set dari state, yaitu setCount ke children komponen, yaitu AddCountButton. Disini peran dari zustand/state management, yaitu untuk menggantikan passing set state ini secara langsung.

note: itu hanya pendapat saya setelah belajar sekilas tentang zustand ini, mungkin ada kegunaan yang lebih dari itu, namun sejauh ini, zustand lumayan berguna :)