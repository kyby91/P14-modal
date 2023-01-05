# React modal for p14

## 1 Install

npm install modal-component-for-p14

Install fontAwesome in the html file

## 2 How to use

Here an simple example to use it, u can modify it to ur own project.
Copy those lines in the container who use the modal :


```jsx
    const App = () => {
        const [isOpen, setIsOpen] = useState(false)
        const toggleClick = () => {
            isOpen ? setIsOpen(false) : setIsOpen(true)
        }
        return (
            <div>
                <div onClick={(e) => toggleClick()}>Click to Open/Close</div>
                <Modal isOpen={isOpen} close={setIsOpen}></Modal>
            </div>
        )
    };
```
