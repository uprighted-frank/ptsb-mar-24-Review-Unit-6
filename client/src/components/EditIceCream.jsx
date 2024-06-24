export default function EditIceCream() {

    return (
        <>
            <h2>Edit Ice Cream</h2>

            <form>
                <input type="text" placeholder="Flavor" name="flavor" id="flavor"/>
                <input type="text" placeholder="Soft Serve" name="softServe" id="softsServe"/>
                <input type="text" placeholder="Manufacturer" name="manufacturer" id="manufacturer"/>
                <input type="text" placeholder="Scoop Quantity" name="scoopQuantity" id="scoopQuantity"/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}