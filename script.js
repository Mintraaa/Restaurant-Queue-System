let queue = [];// กำหนดคิวเริ่มต้นเป็นว่าง

// ตัวฟังก์ชันสำหรับเพิ่มลูกค้าเข้าคิว
document.getElementById("enqueueBtn").addEventListener("click", () => {
  // ดึงชื่อและเบอร์โทรศัพท์ของลูกค้าจากช่องกรอก
  const customerName = document.getElementById("customerName").value;
  const customerPhone = document.getElementById("customerPhone").value;

  // ตรวจสอบว่าทั้งชื่อและเบอร์โทรศัพท์ถูกต้องหรือไม่
  if (customerName && isValidPhoneNumber(customerPhone)) {
    // สร้างออบเจ็กต์ของลูกค้าพร้อมชื่อและเบอร์โทรศัพท์
    const customer = { name: customerName, phone: customerPhone };
    // เพิ่มลูกค้าเข้าคิว
    queue.push(customer);
    // ล้างช่องกรอกหลังจากเพิ่มลูกค้า
    document.getElementById("customerName").value = "";
    document.getElementById("customerPhone").value = "";
    // อัปเดตการแสดงคิว
    updateQueueDisplay();
  } else {
    // แจ้งเตือนหากชื่อหรือเบอร์โทรศัพท์ไม่ถูกต้อง
    alert("Please enter valid name and phone number.");
  }
});

// ตัวฟังก์ชันสำหรับเรียกลูกค้าต่อไป
document.getElementById('dequeueBtn').addEventListener('click', () => {
    if (queue.length > 0) {
      // ลบลูกค้าแรกออกจากคิว
        const nextCustomer = queue.shift();
        // แสดงรายละเอียดของลูกค้าที่เรียก
        alert(`Next customer: ${nextCustomer.name}, Phone: ${nextCustomer.phone}`);
        // อัปเดตการแสดงคิว
        updateQueueDisplay();
    } else {
      // แจ้งเตือนหากคิวว่างเปล่า
        alert('No more customers in the queue.');
    }
});

function updateQueueDisplay() {
    const queueList = document.getElementById('queueList');
    queueList.innerHTML = '<h3>Queue</h3>';
    queue.forEach((customer, index) => {
        queueList.innerHTML += `<p>${index + 1}. ${customer.name} - ${customer.phone}</p>`;
    });
}
// เพิ่มการตรวจสอบเบอร์โทรศัพท์ (เช่น ความยาว, เป็นตัวเลขเท่านั้น, อื่น ๆ)
function isValidPhoneNumber(phoneNumber) {
  // เพิ่มตรวจสอบเบอร์โทรศัพท์ที่ต้องการ
  // ตัวอย่างเช่น ต้องมีความยาว 10 หลัก, เป็นตัวเลขเท่านั้น, เป็นเงื่อนไขอื่น ๆ
  return /^\d{10}$/.test(phoneNumber);
}