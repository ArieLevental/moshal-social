import WhatsappGroup from "../models/WhatsappGroup.js";

export const getAllWhatsappGroups = async (req, res, next) => {
  try {
    const whatsappGroups = await WhatsappGroup.find();

    if (!whatsappGroups) {
      throw { message: "WhatsApp group not found", statusCode: 404 };
    }

    res.status(200).json(whatsappGroups);
  } catch (err) {
    next(err);
  }
};

export const newWhatsappGroup = async (req, res, next) => {
  const whatsappGroup = req.body;
  console.log(whatsappGroup);
  const newWhatsappGroup = new WhatsappGroup(whatsappGroup);

  try {
    await newWhatsappGroup.save();

    res.status(201).json(newWhatsappGroup);
  } catch (err) {
    next(err);
  }
};

export const updateWhatsappGroup = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const whatsappGroup = req.body;

    const updatedWhatsappGroup = await WhatsappGroup.findByIdAndUpdate(
      _id,
      whatsappGroup,
      { new: true }
    );
    if (!updatedWhatsappGroup) {
      throw { message: "Failed to update WhatsApp group", statusCode: 400 };
    }

    res.status(200).json(updatedWhatsappGroup);
  } catch (err) {
    next(err);
  }
};

export const deleteWhatsappGroup = async (req, res, next) => {
  try {
    const { id } = req.params;

    await WhatsappGroup.findByIdAndRemove(id);
    if (!WhatsappGroup) {
      throw { message: "Failed to delete WhatsApp group", statusCode: 400 };
    }

    res.status(200).json({ message: "Whatsapp Group deleted successfully" });
  } catch (err) {
    next(err);
  }
};
