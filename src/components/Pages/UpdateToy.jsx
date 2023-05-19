import { Label, TextInput, Textarea } from "flowbite-react";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  useTitle('Update Toy Details');
  const toyDetails = useLoaderData();
  const navigate = useNavigate();
  const [
    {
      _id,
      picture,
      name,
      sellerName,
      sellerEmail,
      subCategoryName,
      price,
      qty,
      rating,
      detail,
    },
  ] = toyDetails;
  const handleUpdateToy = (event) => {
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
    fetch(`http://localhost:3000/updateToy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
            toast("Updated Successfully!!");
            navigate('/myToys');
        }
      });
  };
  return (
    <div className="px-10 mb-8">
      <h3 className="text-center py-6 font-bold text-2xl">
        Update Toy Details
      </h3>
      <form
        onSubmit={handleUpdateToy}
        className="flex flex-col justify-center gap-4"
      >
        <div className="flex justify-center w-full gap-2">
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="picture" value="Picture URL" />
            </div>
            <TextInput
              name="picture"
              type="text"
              defaultValue={picture}
              required={true}
            />
          </div>
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Toy Name" />
            </div>
            <TextInput
              name="name"
              type="text"
              defaultValue={name}
              required={true}
            />
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
              defaultValue={sellerName}
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
              defaultValue={sellerEmail}
            />
          </div>
        </div>
        <div className="flex justify-center w-full gap-2">
          <select
            className="select select-bordered w-1/2 mt-7"
            name="subCategoryName" defaultValue={subCategoryName}
          >
            <option>Electronics</option>
            <option>Remote Control Vehicle</option>
            <option>Monster Trucks</option>
          </select>
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              name="price"
              type="text"
              defaultValue={price}
              required={true}
            />
          </div>
        </div>
        <div className="flex justify-center w-full gap-2">
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="rating" value="Rating" />
            </div>
            <TextInput
              name="rating"
              type="text"
              defaultValue={rating}
              required={true}
            />
          </div>
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="qty" value="Available Qty" />
            </div>
            <TextInput
              name="qty"
              type="text"
              defaultValue={qty}
              required={true}
            />
          </div>
        </div>
        <div className="mb-2 block">
          <Label htmlFor="detail" value="Product Detail" />
        </div>
        <Textarea
          name="detail"
          type="text"
          defaultValue={detail}
          required={true}
        />
        <button className="bg-[#ff8c98] hover:bg-white text-white hover:text-[#ff8c98] border-2 border-[#ff8c98] hover:border-[#ff8c98] font-bold py-2 px-4 rounded mt-4 w-full">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateToy;
