create database hostel;

use hostel;

drop table if exists BILL;

drop table if exists BILL_DETAIL;

drop table if exists CONTRACT;

drop table if exists INDEX_OF_WE;

drop table if exists PAYMENT;

drop table if exists PAYMENT_METHOD;

drop table if exists RECEIPT;

drop table if exists ROOM;

drop table if exists SERVICE;

drop table if exists SERVICE_OF_ROOM;

drop table if exists STATUS;

drop table if exists TENANT;

drop table if exists USER;

/*==============================================================*/
/* Table: BILL                                                  */
/*==============================================================*/
create table BILL
(
   BILL_ID              nvarchar(10) not null,
   ROOM_ID              nvarchar(8) not null,
   MONTH                int not null,
   YEAR                 int not null,
   USERNAME             nvarchar(20) not null,
   STATUS_ID            nvarchar(10) not null,
   CREATED_DATE         datetime,
   TOTAL_AMOUNT         float,
   PAID_DATE            datetime,
   primary key (BILL_ID)
);

/*==============================================================*/
/* Table: BILL_DETAIL                                           */
/*==============================================================*/
create table BILL_DETAIL
(
   BILL_ID              nvarchar(10) not null,
   SERVICE_ID           nvarchar(10) not null,
   QUANTITY             int,
   DISCOUNT             float,
   TAX                  float,
   TOTAL                float,
   primary key (BILL_ID)
);

/*==============================================================*/
/* Table: CONTRACT                                              */
/*==============================================================*/
create table CONTRACT
(
   CONTRACT_ID          nvarchar(8) not null,
   TENANT_ID            nvarchar(8) not null,
   USERNAME             nvarchar(20) not null,
   STATUS_ID            nvarchar(10) not null,
   START_DATE           datetime,
   END_DATE             datetime,
   CREATE_DATE          datetime,
   NOTE                 text,
   primary key (CONTRACT_ID)
);

/*==============================================================*/
/* Table: INDEX_OF_WE                                           */
/*==============================================================*/
create table INDEX_OF_WE
(
   ROOM_ID              nvarchar(8) not null,
   MONTH                int not null,
   YEAR                 int not null,
   INDEX_OF_WATER       int,
   INDEX_OF_ELECTRICITY int,
   primary key (ROOM_ID, MONTH, YEAR)
);

/*==============================================================*/
/* Table: PAYMENT                                               */
/*==============================================================*/
create table PAYMENT
(
   PAYMENT_ID           nvarchar(8) not null,
   METHOD_ID            nvarchar(8) not null,
   USERNAME             nvarchar(20) not null,
   PAYMENT_DATE         datetime,
   DESCRIPTION          text,
   AMOUNT               nvarchar(15),
   CREATE_DATE          datetime,
   primary key (PAYMENT_ID)
);

/*==============================================================*/
/* Table: PAYMENT_METHOD                                        */
/*==============================================================*/
create table PAYMENT_METHOD
(
   METHOD_ID            nvarchar(8) not null,
   METHOD_NAME          nvarchar(50),
   primary key (METHOD_ID)
);

/*==============================================================*/
/* Table: RECEIPT                                               */
/*==============================================================*/
create table RECEIPT
(
   RECEIPT_ID           nvarchar(8) not null,
   TENANT_ID            nvarchar(8) not null,
   METHOD_ID            nvarchar(8) not null,
   USERNAME             nvarchar(20) not null,
   RECEIPT_DATE         datetime,
   DESCRIPTION          text,
   AMOUNT               nvarchar(15),
   CREATED_DATE         datetime,
   primary key (RECEIPT_ID)
);

/*==============================================================*/
/* Table: ROOM                                                  */
/*==============================================================*/
create table ROOM
(
   ROOM_ID              nvarchar(8) not null,
   STATUS_ID            nvarchar(10) not null,
   AREA                 float,
   RENTAL_PRICE         float,
   MAX                  int,
   USED                 int,
   primary key (ROOM_ID)
);

/*==============================================================*/
/* Table: SERVICE                                               */
/*==============================================================*/
create table SERVICE
(
   SERVICE_ID           nvarchar(10) not null,
   SERVICE_NAME         nvarchar(50),
   PRICE                float,
   UNIT                 nvarchar(50),
   primary key (SERVICE_ID)
);

/*==============================================================*/
/* Table: SERVICE_OF_ROOM                                       */
/*==============================================================*/
create table SERVICE_OF_ROOM
(
   ROOM_ID              nvarchar(8) not null,
   SERVICE_ID           nvarchar(10) not null,
   primary key (ROOM_ID, SERVICE_ID)
);

/*==============================================================*/
/* Table: STATUS                                                */
/*==============================================================*/
create table STATUS
(
   STATUS_ID            nvarchar(10) not null,
   STATUS_NAME          nvarchar(50),
   STATUS_NOTE          nvarchar(120),
   primary key (STATUS_ID)
);

/*==============================================================*/
/* Table: TENANT                                                */
/*==============================================================*/
create table TENANT
(
   TENANT_ID            nvarchar(8) not null,
   STATUS_ID            nvarchar(10) not null,
   ROOM_ID              nvarchar(8) not null,
   TENANT_NAME          nvarchar(225),
   PHONE_NUMBER         int,
   ADDRESS              text,
   DATE_OF_BIRTH        date,
   WORK                 nvarchar(120),
   primary key (TENANT_ID)
);

/*==============================================================*/
/* Table: USER                                                  */
/*==============================================================*/
create table USER
(
   USERNAME             nvarchar(20) not null,
   FULLNAME             nvarchar(225),
   PASSWORD             nvarchar(20),
   PHONE_NUMBER         int,
   EMAIL                nvarchar(120),
   primary key (USERNAME)
);

alter table BILL add constraint FK_BILL_STATUS foreign key (STATUS_ID)
      references STATUS (STATUS_ID) on delete restrict on update restrict;

alter table BILL add constraint FK_CREATE_BILL foreign key (USERNAME)
      references USER (USERNAME) on delete restrict on update restrict;

alter table BILL add constraint FK_INDEX_IN_BILL foreign key (ROOM_ID, MONTH, YEAR)
      references INDEX_OF_WE (ROOM_ID, MONTH, YEAR) on delete restrict on update restrict;

alter table BILL_DETAIL add constraint FK_BILL_DETAIL foreign key (BILL_ID)
      references BILL (BILL_ID) on delete restrict on update restrict;

alter table BILL_DETAIL add constraint FK_SERVICE_IN_BILL foreign key (SERVICE_ID)
      references SERVICE (SERVICE_ID) on delete restrict on update restrict;

alter table CONTRACT add constraint FK_CONTRACT_OF_TENANT foreign key (TENANT_ID)
      references TENANT (TENANT_ID) on delete restrict on update restrict;

alter table CONTRACT add constraint FK_CREATE_CONTRACT foreign key (USERNAME)
      references USER (USERNAME) on delete restrict on update restrict;

alter table CONTRACT add constraint FK_STATUS_CONTRACT foreign key (STATUS_ID)
      references STATUS (STATUS_ID) on delete restrict on update restrict;

alter table INDEX_OF_WE add constraint FK_INDEX_AT_ROOM foreign key (ROOM_ID)
      references ROOM (ROOM_ID) on delete restrict on update restrict;

alter table PAYMENT add constraint FK_CREATE_PAYMENT foreign key (USERNAME)
      references USER (USERNAME) on delete restrict on update restrict;

alter table PAYMENT add constraint FK_PAYMENT_METHOD foreign key (METHOD_ID)
      references PAYMENT_METHOD (METHOD_ID) on delete restrict on update restrict;

alter table RECEIPT add constraint FK_CREATE_RECEIPT foreign key (USERNAME)
      references USER (USERNAME) on delete restrict on update restrict;

alter table RECEIPT add constraint FK_RECEIPT_METHOD foreign key (METHOD_ID)
      references PAYMENT_METHOD (METHOD_ID) on delete restrict on update restrict;

alter table RECEIPT add constraint FK_TENANT_IN_RECEIPT foreign key (TENANT_ID)
      references TENANT (TENANT_ID) on delete restrict on update restrict;

alter table ROOM add constraint FK_ROOM_STATUS foreign key (STATUS_ID)
      references STATUS (STATUS_ID) on delete restrict on update restrict;

alter table SERVICE_OF_ROOM add constraint FK_SERVICE_OF_ROOM foreign key (ROOM_ID)
      references ROOM (ROOM_ID) on delete restrict on update restrict;

alter table SERVICE_OF_ROOM add constraint FK_SERVICE_OF_ROOM2 foreign key (SERVICE_ID)
      references SERVICE (SERVICE_ID) on delete restrict on update restrict;

alter table TENANT add constraint FK_TENANT_AT_ROOM foreign key (ROOM_ID)
      references ROOM (ROOM_ID) on delete restrict on update restrict;

alter table TENANT add constraint FK_TENANT_STATUS foreign key (STATUS_ID)
      references STATUS (STATUS_ID) on delete restrict on update restrict;

