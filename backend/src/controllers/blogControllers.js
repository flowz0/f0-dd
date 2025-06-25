export const getAllBlogs = (req, res) => {
  res.status(200).send("You just fetched the blogs.");
}

export const createBlog = (req, res) => {
  res.status(201).json({message: "Blog created successfully."});
}

export const updateBlog = (req, res) => {
  res.status(200).json({message: "Blog updated successfully."});
}

export const deleteBlog = (req, res) => {
  res.status(200).json({message: "Blog deleted successfully."});
}