/***********************************************************************
 * Module:  FinantController.java
 * Author:  Entier
 * Purpose: Defines the Class FinantController
 ***********************************************************************/

package backend.hostel.demo.controller;

import java.util.*;

import org.springframework.http.ResponseEntity;

import backend.hostel.demo.dto.FinanceDto;
import backend.hostel.demo.dto.PaymentDto;
import backend.hostel.demo.dto.ReceiptDto;
import backend.hostel.demo.service.FinanceService;

/** @pdOid 571eff31-7ec5-4439-b292-1a852063cc8f */
public class FinantController {
   /** @pdRoleInfo migr=no name=FinanceService assc=association11 mult=1..1 */
   public FinanceService financeService;
   
   /** @pdOid 2f5e1185-e674-4d7a-94e3-359679685c58 */
   public ResponseEntity<?> getReceipts() {
      // TODO: implement
      return null;
   }
   
   /** @pdOid 30702848-61ce-4da8-8bf1-870908ed2637 */
   public ResponseEntity<?> getPayments() {
      // TODO: implement
      return null;
   }
   
   /** @param receitId
    * @pdOid d22a2c8f-cf6d-49dc-a1b3-9eda7dc42dd8 */
   public ResponseEntity<?> getReceiptById(String receitId) {
      // TODO: implement
      return null;
   }
   
   /** @param paymentId
    * @pdOid daf6914a-7fac-49fb-aa99-b378917e049e */
   public ResponseEntity<?> getPaymentById(String paymentId) {
      // TODO: implement
      return null;
   }
   
   /** @param receiptDto
    * @pdOid b031c2d2-e7c7-4c4d-b31b-6a0640a6e81d */
   public ResponseEntity<?> createReceipt(ReceiptDto receiptDto) {
      // TODO: implement
      return null;
   }
   
   /** @param receiptId 
    * @param receiptDto
    * @pdOid 3facd5f6-2446-4d4f-b3b9-2e06923b8d7d */
   public ResponseEntity<?> updateReceipt(String receiptId, ReceiptDto receiptDto) {
      // TODO: implement
      return null;
   }
   
   /** @param paymentDto
    * @pdOid 515f9105-ce86-486e-8a38-a88f98fcf2c0 */
   public ResponseEntity<?> createPayment(PaymentDto paymentDto) {
      // TODO: implement
      return null;
   }
   
   /** @param paymentId 
    * @param paymentDto
    * @pdOid 3813d321-8797-40fe-898d-855aa5dd89fd */
   public ResponseEntity<?> updatePayment(String paymentId, PaymentDto paymentDto) {
      // TODO: implement
      return null;
   }

}