import './Demo.css'

export default function Demo() {


    const name = 'Golan'
    const age = 25
    const isMale: boolean = true

    const grades = [{
        id: 1,
        grade: 66
    }, {
        id: 2,
        grade: 77
    }, {
        id: 3,
        grade: 99
    }, {
        id: 4,
        grade: 99
    }]

    function getMessage() {
        return 'dummy string'
    }

    // return (
    //     <div className='Demo'>
    //         hello {name} from demo <br />
    //         you are {age} years old
    //         are you male? {isMale ? 'yes' : 'no'}
    //         your grades are
    //         <ul>
    //             {grades.map(({ id, grade }) => <li key={id}>{grade}</li>)}
    //         </ul>
    //         {getMessage()}
    //     </div>
    // )

    return (
        <div className='Whatever'>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, dolore ducimus! Quibusdam officiis explicabo ipsa adipisci repudiandae animi numquam nemo corrupti deleniti? Perspiciatis facere fugiat modi explicabo, dolorum quidem tempora voluptatem quo sit. Sit facilis vel distinctio at nemo aperiam obcaecati eveniet itaque harum quam consequuntur libero, iusto magnam blanditiis. Pariatur iusto quaerat repellendus dolore consequuntur possimus veniam blanditiis deserunt modi vel asperiores soluta qui magnam laboriosam consequatur a voluptates dolorum repellat itaque odit minus fugit recusandae, quisquam doloremque. Dolore beatae asperiores veritatis aut nostrum sed consequatur minima repellat laborum tenetur a ipsum commodi, perferendis aperiam esse, nihil dolores natus!
                </p>
            </div>
        </div>
    )
}