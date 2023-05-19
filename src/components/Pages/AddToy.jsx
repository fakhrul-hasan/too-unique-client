import { Label, TextInput, Textarea } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const picture = form.picture.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategoryName = form.subCategoryName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const qty = form.qty.value;
    const detail = form.detail.value;
    const toy = {
      picture: picture,
      name: name,
      sellerName: sellerName,
      sellerEmail: sellerEmail,
      subCategoryName: subCategoryName,
      price: price,
      rating: rating,
      qty: qty,
      detail: detail,
    };
    console.log(toy);
    fetch("http://localhost:3000/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success('Toy Added Successfully!!!');
          form.reset();
        }
      });
  };
  return (
    <div className="px-10 mb-8">
      <ToastContainer/>
      <h3 className="text-center py-6 font-bold text-2xl">Add a Toy</h3>
      <form
        onSubmit={handleAddToy}
        className="flex flex-col justify-center gap-4"
      >
        <div className="flex justify-center w-full gap-2">
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="picture" value="Picture URL" />
            </div>
            <TextInput name="picture" type="text" required={true} />
          </div>
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Toy Name" />
            </div>
            <TextInput name="name" type="text" required={true} />
          </div>
        </div>
        <div className="flex justify-center w-full gap-2">
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="sellerName" value="Seller Name" />
            </div>
            <TextInput
              name="sellerName"
              type="text"
              defaultValue={user?.displayName}
              required={true}
            />
          </div>
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="sellerEmail" value="Seller Email" />
            </div>
            <TextInput
              name="sellerEmail"
              type="email"
              defaultValue={user?.email}
            />
          </div>
        </div>
        <div className="flex justify-center w-full gap-2">
          <select className="select select-bordered w-1/2 mt-7" name="subCategoryName" defaultValue={'Select a Sub-category'}>
            <option disabled>
              Select a Sub-category
            </option>
            <option>Electronics</option>
            <option>Remote Control Vehicle</option>
            <option>Monster Trucks</option>
          </select>
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput name="price" type="text" required={true} />
          </div>
        </div>
        <div className="flex justify-center w-full gap-2">
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="rating" value="Rating" />
            </div>
            <TextInput name="rating" type="text" required={true} />
          </div>
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="qty" value="Available Qty" />
            </div>
            <TextInput name="qty" type="text" required={true} />
          </div>
        </div>
        <div className="mb-2 block">
          <Label htmlFor="detail" value="Product Detail" />
        </div>
        <Textarea name="detail" type="text" required={true} />
        <button className="bg-[#ff8c98] hover:bg-white text-white hover:text-[#ff8c98] border-2 border-[#ff8c98] hover:border-[#ff8c98] font-bold py-2 px-4 rounded mt-4 w-full">
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddToy;
